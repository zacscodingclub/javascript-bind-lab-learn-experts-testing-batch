const app = "I don't do much.";

const digitalClock = {
  time: Math.round(Date.now()/1000) ,
  startTicking() {
    setInterval(() => this.time++, 1000);
  }
}

const censor = (word, str) => {
  const match = new RegExp(word, 'g');
  return str.replace(match, "BLEEP")
}

const violenceCensor = censor.bind(null, 'violence');
const drugsCensor = censor.bind(null, 'drugs');
