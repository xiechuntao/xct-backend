-- Creat table
CREATE TABLE user (
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  nick_name VARCHAR(32),
  upwd VARCHAR(32),
  gender INT,
  phone VARCHAR(16),
  avatar VARCHAR(32)
);

-- Insert a data
INSERT INTO user 
(uname, nick_name, upwd, gender, phone, avatar)
VALUES
('谢春涛','123456','1','18557536045','');

-- Insert a colum
ALTER TABLE user ADD nick_name VARCHAR(32);

-- Retrieve me
SELECT
	nick_name, gender, phone, avatar
FROM
	user WHERE uid = 1 LIMIT 1;
