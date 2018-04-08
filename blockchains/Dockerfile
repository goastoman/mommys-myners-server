FROM ubuntu:trusty
USER root

RUN apt-get update
RUN apt-get install -y python-software-properties
RUN apt-get install -y nano build-essential libtool autotools-dev automake pkg-config libssl-dev libevent-dev bsdmainutils python3 libboost-all-dev software-properties-common

RUN add-apt-repository ppa:bitcoin/bitcoin
RUN apt-get update
RUN apt-get install -y libminiupnpc-dev libzmq3-dev
RUN apt-get install -y libdb4.8-dev libdb4.8++-dev

RUN mkdir /opt/rest
RUN mkdir /opt/blockchain
COPY ./rest /opt/rest
COPY ./btc1 /opt/bitcoin

RUN mkdir -p /root/.bitcoin
COPY ./bitcoin.conf /root/.bitcoin/bitcoin.conf

WORKDIR /opt/bitcoin
RUN ./autogen.sh
RUN ./configure
RUN make

WORKDIR /opt/bitcoin
RUN pip install --upgrade pip
COPY requirements.txt /opt/web
RUN pip install -r requirements.txt

ENV FLASK_CONFIG development

EXPOSE 55089 55088 55092 55093 80

CMD  python server.py

