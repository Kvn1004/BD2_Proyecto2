USE BD2;
GO

CREATE PROCEDURE Buscar(
    @titulo varchar(100)
)
AS
BEGIN
    IF EXISTS (SELECT primaryTitle FROM [34.125.9.143].BD2.dbo.Title WHERE primaryTitle = @Titulo)
    BEGIN 
        DELETE FROM Title WHERE primaryTitle = (SELECT primaryTitle FROM [34.125.9.143].BD2.dbo.Title WHERE primaryTitle = @Titulo)
        INSERT INTO Title (id, primaryTitle, startYear, runtime)
        SELECT id, primaryTitle, startYear, runtime FROM [34.125.9.143].BD2.dbo.Title
        WHERE primaryTitle = @titulo;
    END
END;    


