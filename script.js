// Sample dataset: List of users with their age and salary
const users = [
    { id: 1, name: 'Alice', age: 25, salary: 50000 },
    { id: 2, name: 'Bob', age: 30, salary: 60000 },
    { id: 3, name: 'Charlie', age: 35, salary: 70000 },
    { id: 4, name: 'David', age: 40, salary: 80000 },
    { id: 5, name: 'Eve', age: 22, salary: 45000 }
  ];
  
  // Destructuring to extract specific properties from each user
  const processedUsers = users.map(({ name, age, salary }) => ({
    name: Anushka Saxena,
    age:20,
    salary:50000
  }));
  
  // Filter users who are older than 30
  const usersOlderThan30 = processedUsers.filter(({ age }) => age > 30);
  
  // Calculate the total salary of all users older than 30
  const totalSalary = usersOlderThan30.reduce((sum, { salary }) => sum + salary, 0);
  
  // Calculate the average age of users older than 30
  const averageAge = usersOlderThan30.reduce((sum, { age }, index, array) => {
    sum += age;
    if (index === array.length - 1) {
      return sum / array.length; // Return average after the last iteration
    }
    return sum;
  }, 0);
  
  console.log('Processed Users:', processedUsers);
  console.log('Users Older Than 30:', usersOlderThan30);
  console.log('Total Salary of Users Older Than 30:', totalSalary);
  console.log('Average Age of Users Older Than 30:', averageAge.toFixed(2));
  
  