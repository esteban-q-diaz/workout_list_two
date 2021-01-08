CREATE DATABASE workout_list_two;

USE workout_list_two;

CREATE TABLE workout_list_two (
  id int not null auto_increment,
  name VARCHAR(30),
  reps int,
  sets int,
  primary key(id)
);