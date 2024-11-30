# Write your MySQL query statement below
select 
  (select e.unique_id from EmployeeUNI e where e.id = x.id) as 'unique_id', 
  x.name 
from Employees x