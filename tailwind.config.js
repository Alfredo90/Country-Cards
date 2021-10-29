const values  = {
  "0": "0",
  "1": "1px",
  "2": "2px",
  "4": "4px",
  "6": "6px",
  "8": "8px",
  "10": "10px",
  "12": "12px",
  "14": "14px",
  "16": "16px",
  "18": "18px",
  "20": "20px",
  "24": "24px",
  "30": "30px",
  "32": "32px",
  "40": "40px",
  "48": "48px",
  "56": "56px",
  "64": "64px",
  "80": "80px",
  "96": "96px",
  "128": "128px",
  "136": "136px",
  "152": "152px",
  "160": "160px",
  "174": "174px",
  "192": "192px",
  "201": "201px",
  "210": "210px",
  "256": "256px",
  "262": "262px",
  "336": "336px",
  "384": "384px",
  "401": "401px",
  "480": "480px",
  "512": "512px",
  "560": "560px",
  "640": "640px",
  "768": "768px",
  "full": "100%",
  "100vw": "100vw",
  "100vh": "100vh"
}

module.exports = {
  purge: ['./src/**/**/*.js', './public/index.html'],
  darkMode: "media",
  theme: {
     backgroundColor: theme => ({
       ...theme('colors'),
       'primary': '#FAFAFA',
       'secondary': '#ffed4a',
       'danger': '#e3342f',
     }),
    extend: {
      fontFamily: {
        'proxima-nova': ["Proxima Nova"]
                       
      },
      width: values,
      height: values,
      borderRadius: {
        "5": "5px",
        "10": "10px",
        "20": "20px",
        "50%": "50%",
        "full": "9999px"
      },
      spacing: values,
      fontSize:values
    },
   
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

