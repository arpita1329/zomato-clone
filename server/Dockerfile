FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

ENV MONGO_URL = mongodb+srv://arpita-dubey-1329:arpi1234@zomato-master.u8tg9.mongodb.net/zomato?retryWrites=true&w=majority
ENV GOOGLE_CLIENT_ID = 884054434391-lmqbjcg39b9ord2682gs6jft6dhdf8pi.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET = pYodjF38lV73yzVjHVOjHfls
ENV AWS_S3_ACCESS_KEY = AKIA456JRQS7LBPKKJNE
ENV AWS_S3_SECRET_KEY = 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
ENV RZR_PAY_ID = rzp_test_pxNBBXyb6jFWDa
ENV RZR_PAY_SECRET = BO8o9w0gPK97Qd5TXy9jVZ6e

CMD [ "npm", "run", "start" ]