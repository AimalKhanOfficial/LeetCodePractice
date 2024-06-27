# Write your MySQL query statement below
select y.name as 'Employee' from Employee x join Employee y on x.id = y.managerId where y.Salary > x.salary

#where x.salary > y.salary and x.managerId = null