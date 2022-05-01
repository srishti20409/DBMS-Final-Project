-----------------------SQL QUERIES-------------------------



----------------Last message + sender----------------------

select MESSAGE_text
from MESSAGE as m
join USER_name
from USER as u
On u.idUSER = m.SENDER_id
group by u.idUSER
sort by m.recived_time

---------Number of unread messages for unique contact-------

select COUNT(idMESSAGE)
from MESSAGE as m
join recived_time 
from NORMAL_CHAT as n
on n.read_time IS NULL
join USER_name
from USER as u
on u.idUSER = m.SENDER_id
group by u.idUSER
sort by m.recived_time


-----------------------online / last seen--------------------

select USER_status, USER_last_seen
from user


-------------------Clear chat/delete message------------------
delete from normal_chat
where
Start a new chat

-----------------------Create new contact---------------------
            Insert into contact
            values(default,’abc’,’xyz’)


---------Search option in individual chat from chat id---------
**Let x in user i/p
Select USER_name

From contacts as c
Join ONE_ONE as nc
on nc.MESSAGE_RECIEVER_ID= c.idCONTACTS
Join MESSAGE as m
On m.idMESSAGE = nc.MESSAGE_idMESSAGE
Where m.idMESSAGE=x


Block contact
**Let contact id=x        
Delete from contacts
Where idCONTACTS=x

Blue ticks- read receipts 
     message id = x
	Select u.first name, nc.read_time
	From contact as u
	Join normal_chat as nc
	on nc.MESSAGE_RECIEVER_id = u.idCONTACTS
	Join MESSAGE as m
On m.idMESSAGE = nc.MESSAGE_idMESSAGE
	Where m.idMESSAGE = x 
 



ADV AGG FN
Ranking–  message wrt time,
                 contacts, 
                  Blocked contacts
                 group contact- admin> saved contacts> numbers
                 Search wrt time









TRIGGERS

File size—------

DELIMITER $$
CREATE TRIGGER file_size
    BEFORE insert
    ON ATTACHMENT FOR EACH ROW
BEGIN
DECLARE mssg VARCHAR(255);
    SET mssg = "attachment max size limit exceeded";
    if
    new.attachment_size<700
    then
    SIGNAL SQLSTATE '45001' set message_text= mssg;
	END if;
end $$
DELIMITER ;

—----------------------------------------------------------------------------------------------------------------------------

Group member limit—-

DELIMITER $$
CREATE TRIGGER grouplimit
    BEFORE insert
    ON GROUP_MEMBERS FOR EACH ROW
BEGIN
declare mssg VARCHAR(255);
declare val int;
    SET val= (select count(*) from GROUP_MEMBERS);
    SET mssg = "Group member limit exceeded";

    if
    val>101 
    then
    SIGNAL SQLSTATE '45000' set message_text= mssg ;
    END if;
end $$
DELIMITER ;
—------------------------------------------------------------------------------------------------



Phone no==10 digit—------

DELIMITER $$
CREATE TRIGGER phn
    BEFORE insert
    ON USER FOR EACH ROW
BEGIN
DECLARE mssg VARCHAR(255);
DECLARE len INT;
    SET len = (SELECT LENGTH(new.user_phone_number));
    SET mssg = "phone no less than 10 digits";
    if
    len<10 
    then
    SIGNAL SQLSTATE '45002' set message_text= mssg;
	END if;
end $$
DELIMITER ;
—----------------------------------------------------------------------------------------------------------------------------

UserDesc Limit—

DELIMITER $$
CREATE TRIGGER udesc
    BEFORE insert
    ON user FOR EACH ROW
BEGIN
DECLARE mssg VARCHAR(255);
DECLARE len INT;
    SET len = (SELECT LENGTH(NEW.user_description));
    SET mssg = “description text limit exceeds”;
	if len >50
    then
    SIGNAL SQLSTATE '45066' set message_text= mssg;
	END if;
end $$
DELIMITER ;
—----------------------------------------------------------------------------------------------------------------------------
Group desc limit-

UserDesc Limit—

DELIMITER $$
CREATE TRIGGER gdesc
    BEFORE insert
    ON group_details FOR EACH ROW
BEGIN
DECLARE mssg VARCHAR(255);
DECLARE len INT;
    SET len = (SELECT LENGTH(NEW.group_description));
    SET mssg = “description text limit exceeds”;
	if len >100
    then
    SIGNAL SQLSTATE '45012' set message_text= mssg;
	END if;
end $$
DELIMITER ;



 -----grants-----

 grant select , insert , update , delete , trigger on *.* to 'root'@'localhost';

