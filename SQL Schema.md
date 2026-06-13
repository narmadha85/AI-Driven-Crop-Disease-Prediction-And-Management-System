CREATE TABLE Farmers (

&#x20;   farmer\_id INT PRIMARY KEY AUTO\_INCREMENT,

&#x20;   name VARCHAR(100),

&#x20;   phone VARCHAR(15),

&#x20;   email VARCHAR(100),

&#x20;   location VARCHAR(100),

&#x20;   password VARCHAR(100),

&#x20;   created\_at TIMESTAMP DEFAULT CURRENT\_TIMESTAMP

);



CREATE TABLE Crops (

&#x20;   crop\_id INT PRIMARY KEY AUTO\_INCREMENT,

&#x20;   crop\_name VARCHAR(100),

&#x20;   season VARCHAR(50),

&#x20;   soil\_type VARCHAR(100)

);



CREATE TABLE Diseases (

&#x20;   disease\_id INT PRIMARY KEY AUTO\_INCREMENT,

&#x20;   disease\_name VARCHAR(100),

&#x20;   symptoms TEXT,

&#x20;   treatment TEXT,

&#x20;   prevention TEXT

);





CREATE TABLE Crop\_Images (

&#x20;   image\_id INT PRIMARY KEY AUTO\_INCREMENT,

&#x20;   crop\_id INT,

&#x20;   disease\_id INT,

&#x20;   image\_path VARCHAR(255),

&#x20;   uploaded\_at TIMESTAMP DEFAULT CURRENT\_TIMESTAMP,

&#x20;   FOREIGN KEY (crop\_id) REFERENCES Crops(crop\_id),

&#x20;   FOREIGN KEY (disease\_id) REFERENCES Diseases(disease\_id)

);





CREATE TABLE Predictions (

&#x20;   prediction\_id INT PRIMARY KEY AUTO\_INCREMENT,

&#x20;   farmer\_id INT,

&#x20;   crop\_id INT,

&#x20;   disease\_id INT,

&#x20;   confidence\_score FLOAT,

&#x20;   prediction\_date TIMESTAMP DEFAULT CURRENT\_TIMESTAMP,

&#x20;   FOREIGN KEY (farmer\_id) REFERENCES Farmers(farmer\_id),

&#x20;   FOREIGN KEY (crop\_id) REFERENCES Crops(crop\_id),

&#x20;   FOREIGN KEY (disease\_id) REFERENCES Diseases(disease\_id)

);





CREATE TABLE Recommendations (

&#x20;   recommendation\_id INT PRIMARY KEY AUTO\_INCREMENT,

&#x20;   disease\_id INT,

&#x20;   fertilizer\_suggestion TEXT,

&#x20;   pesticide\_suggestion TEXT,

&#x20;   farming\_tips TEXT,

&#x20;   FOREIGN KEY (disease\_id) REFERENCES Diseases(disease\_id)

);





CREATE TABLE Weather (

&#x20;   weather\_id INT PRIMARY KEY AUTO\_INCREMENT,

&#x20;   location VARCHAR(100),

&#x20;   temperature FLOAT,

&#x20;   humidity FLOAT,

&#x20;   rainfall FLOAT,

&#x20;   recorded\_at TIMESTAMP DEFAULT CURRENT\_TIMESTAMP

);





