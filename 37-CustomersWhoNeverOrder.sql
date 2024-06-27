/* https://leetcode.com/problems/customers-who-never-order/ */

select c.name as 'Customers' from Customers c left join Orders o on c.id = o.customerId where o.customerId is null