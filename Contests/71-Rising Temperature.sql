# Write your MySQL query statement below
# https://leetcode.com/problems/rising-temperature/submissions/1321184704/ needs work
select y.id from Weather y where y.temperature > (select temperature from Weather x where x.id = y.id - 1)