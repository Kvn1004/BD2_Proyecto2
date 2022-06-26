FROM mcr.microsoft.com/mssql/server:2022-latest  

ENV ACCEPT_EULA=Y
ENV SA_PASSWORD=Bases21234.
ENV MSSQL_TCP_PORT=1433

WORKDIR /src

RUN (/opt/mssql/bin/sqlservr --accept-eula & ) | grep -q "Service Broker manager has started" &&  /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P Bases21234.