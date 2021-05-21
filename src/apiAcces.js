// connexion nike sa mere a l'api
const { google } = require('googleapis');
// const Obj = require('./convertor.js');
const net = require('net');
const obj = require('./parseClass');

let finalParse = [];

const { OAuth2 } = google.auth;

const oAuth2Client = new OAuth2(
  '787683943283-5pe9joqgvt9trc9fnn4fvl43p6h2psng.apps.googleusercontent.com',
  'XMfdN_Wz54fzoZjaNkbisWJS'
);

oAuth2Client.setCredentials({
  refresh_token:
    '1//04IEJ_kyZrJP5CgYIARAAGAQSNwF-L9Ir6OZSIioOmMFDx029EZ8IGh1I3w4BYPcbRhB38QUXusAbxpB5SAkqkrmUHNHRR0AbvwM',
});

const server = net.createServer();

/// ////////////////////////////////////////////////////////////////////////////////////////////////

server.on('connection', (socket) => {
  console.log('Fichier XML:');

  let i = 0;
  const arr = [];
  const e = [];

  socket.on('data', (d) => {
    arr.push(d);
    e.push(arr[i].toString());

    const myObj = new obj(e, i);

    if (i === 5) {
      finalParse = myObj.parse();
      // console.log(finalParse);

      const test = {
        jourD: finalParse[2],
        moisD: finalParse[1],
        anneeD: finalParse[3],
        heureD: finalParse[4],
        minD: finalParse[5],
        secD: finalParse[6],
        jourF: finalParse[11],
        moisF: finalParse[9],
        anneeF: finalParse[12],
        heureF: finalParse[13],
        minF: finalParse[14],
        secF: finalParse[15],
      };

      console.log(finalParse);
      console.log(test);
      /// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // creation du calendrier

      const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

      const eventStartTime = new Date(test.anneeD, 4, test.jourD); // creation de la date de depart
      eventStartTime.setHours(test.heureD); // def de l'heure
      eventStartTime.setMinutes(test.minD); // def de l'heure
      eventStartTime.setSeconds(test.secD); // def de l'heureeventStartTime.setMinutes(); //def de l'heure

      const eventEndTime = new Date(test.anneeF, 4, test.jourF); // creation de la date de fin
      eventEndTime.setHours(test.heureF); // def de l'heure
      eventEndTime.setMinutes(test.minF); // def de l'heure
      eventEndTime.setSeconds(test.secF); // def de l'heure

      const event = {
        summary: `test sdv 2`,
        location: `pau, stade d'eaux vives`,
        description: `Ceci est une super desvcription`,
        colorId: 1,
        start: {
          dateTime: eventStartTime,
          timeZone: 'America/Denver',
        },
        end: {
          dateTime: eventEndTime,
          timeZone: 'America/Denver',
        },
      };

      calendar.freebusy.query(
        {
          resource: {
            timeMin: eventStartTime,
            timeMax: eventEndTime,
            timeZone: 'America/Denver',
            items: [{ id: 'primary' }],
          },
        },
        (err, res) => {
          if (err) return console.error('Free Busy Query Error: ', err);

          const eventArr = res.data.calendars.primary.busy;

          if (eventArr.length === 0)
            return calendar.events.insert(
              { calendarId: 'primary', resource: event },
              (err) => {
                if (err)
                  return console.error('Error Creating Calender Event:', err);
                return console.log('Calendar event successfully created.');
              }
            );

          return console.log(`Sorry I'm busy...`);
        }
      );
    }
    i++;
  });
});

server.listen(9000, () => {
  console.log('server listening to truc');
});
