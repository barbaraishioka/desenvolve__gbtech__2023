USE SUCOS;
CREATE TABLE TB_VENDEDORES (
    MATRICULA varchar(5), 
    NOME varchar(100), 
    PERCENTUAL_COMISSAO float
);

INSERT INTO TABELA_DE_VENDEDORES
(MATRICULA, NOME, PERCENTUAL_COMISSAO)
VALUES
('00233', 'João Geraldo da Fonseca', 0.10);

INSERT INTO TABELA_DE_VENDEDORES
(MATRICULA, NOME, PERCENTUAL_COMISSAO)
VALUES
 ('00235','Márcio Almeida Silva',0.08);
 
 INSERT INTO TABELA_DE_VENDEDORES
(MATRICULA, NOME, PERCENTUAL_COMISSAO)
VALUES
('00236','Cláudia Morais',0.08);

UPDATE TABELA_DE_VENDEDORES SET PERCENTUAL_COMISSAO = 0.11
WHERE MATRICULA = '00236';

UPDATE TABELA_DE_VENDEDORES SET NOME = 'José Geraldo da Fonseca Junior'
WHERE MATRICULA = '00233';

DELETE FROM TABELA_DE_VENDEDORES WHERE MATRICULA = '00233';

DROP TABLE TABELA_DE_VENDEDORES;

CREATE TABLE TABELA_DE_VENDEDORES
( MATRICULA varchar(5),
NOME varchar(100),
PERCENTUAL_COMISSAO float,
DATA_ADMISSAO date,
DE_FERIAS bit);

ALTER TABLE TABELA_DE_VENDEDORES ADD PRIMARY KEY (MATRICULA);

INSERT INTO TABELA_DE_VENDEDORES
(MATRICULA, NOME, DATA_ADMISSAO, PERCENTUAL_COMISSAO, DE_FERIAS)
VALUES
('00235','Márcio Almeida Silva','2014-08-15',0.08,0);

INSERT INTO TABELA_DE_VENDEDORES
(MATRICULA, NOME, DATA_ADMISSAO, PERCENTUAL_COMISSAO, DE_FERIAS)
VALUES
('00236','Cláudia Morais','2013-09-17',0.08,1);

INSERT INTO TABELA_DE_VENDEDORES
(MATRICULA, NOME, DATA_ADMISSAO, PERCENTUAL_COMISSAO, DE_FERIAS)
VALUES
('00237','Roberta Martins','2017-03-18',0.11,1);

INSERT INTO TABELA_DE_VENDEDORES
(MATRICULA, NOME, DATA_ADMISSAO, PERCENTUAL_COMISSAO, DE_FERIAS)
VALUES
('00238','Pericles Alves','2016-08-21',0.11,0);

SELECT NOME, MATRICULA FROM TABELA_DE_VENDEDORES;

SELECT * FROM TABELA_DE_VENDEDORES WHERE NOME = 'Claudia Morais';

SELECT * FROM TABELA_DE_VENDEDORES WHERE PERCENTUAL_COMISSAO > 0.10;

SELECT * FROM TABELA_DE_VENDEDORES WHERE YEAR(DATA_ADMISSAO) >= 2016;

SELECT * FROM TABELA_DE_VENDEDORES WHERE YEAR(DATA_ADMISSAO) < 2016 AND DE_FERIAS = 1;