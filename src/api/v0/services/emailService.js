import mailgun from 'mailgun-js';

const DOMAIN = 'sandbox45e4c991ac3f49aa85fbbfd34de33786.mailgun.org';
const mg = mailgun({
  apiKey: '6d44340c00f8ffa653b0d27d904d2030-90346a2d-0a5acf75',
  domain: DOMAIN,
});

export const sendQuotationEmail = async (email) => {
  const data = {
    from: 'noreply@rvehardware.com',
    to: email,
    subject: 'Cotizacion Juan Perez',
    html: `
            <h2>Tu cotizacion es:</h2>
            <p>Gracias</p>
        `,
  };

  mg.messages().send(data, function (error, body) {
    if (error) {
      console.log(error);
      throw new Error('Send email error.');
    }
  });
};
