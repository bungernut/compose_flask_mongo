FROM python:3.8.1
# This is assuming debian-buster base
# CMD ["python3"] is also assumed 

LABEL MAINTAINER="Brian Mong <bung@slac.stanfor.edu>"

#ENV GROUP_ID=1000 \
#    USER_ID=1000

WORKDIR /var/www/

ADD . /var/www/
RUN pip install -r requirements.txt
RUN pip install gunicorn

#RUN addgroup www
#RUN adduser -D -u $USER_ID -G www www -s /bin/sh

#USER www

EXPOSE 5000

CMD [ "gunicorn", "-w", "4", "--bind", "0.0.0.0:5000", "wsgi"]