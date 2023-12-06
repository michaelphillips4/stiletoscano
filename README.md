# Stile Toscano
Tuscan style, tailor-made clothes

original https://stiletoscano.eu/ 

### Booking form
Booking form works: allowing the user to select a month then day then time for their booking.
Once these are filled in it asks the user for their contact details.
<br /><br />
The book/submit button is only enabled when all the details are filled in the nots section is optional.
<br /><br />
There is validation that is shown by the ticks.
<br /><br />
There is no validation for the format of the email or tel at present.
<br /><br />
It has options in it to query a diary when we know more about this is currently set up.    

### Internationalization 

currently you can select italian or english from the drp down and the text date formats and number formats will be changed as expected.
The text values are all in one file src/i18n/messages.js this file can be easily edited. 
see : https://github.com/michaelphillips4/stiletoscano/blob/main/src/i18n/messages.js


## Tech stack 

Site uses vite - react. The style is css and bootstrap for the input forms.
it is currently hosted on ASW using amplify.

react-intl see : https://blog.logrocket.com/react-intl-internationalize-your-react-apps/


## Questions 

* do we need to check available booking times. 
  <br />If yes how does this work? 
  <br />note current system is complicated and isn't very easy to book could lose leads/business?
  <br />Feels like the forms are over complicated and could be simplified into one form.
* date - time  picker.
* responsive screen design for mobiles.
* what language should it be in.  
* hosting and mapping to the existing url.
* SEO stuff.   


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



