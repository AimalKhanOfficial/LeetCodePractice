select y.id as 'Id' from Weather y 
where y.temperature > 
(select temperature from Weather x where DATE(x.recordDate) = DATE_SUB(y.recordDate, INTERVAL 1 DAY))
