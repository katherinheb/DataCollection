for (let i = 1; i <= 100; i++){
    if (i % 15 === 0) {
        console.log(`FizzBuzz`)
    }
    else if (i % 5 === 0){
        console.log(`Buzz`)
    }
    else if (i % 3 === 0){
        console.log(`Fizz`)
    }
    else {
    console.log(i)
    }
}
function printPrimeNumbers(n) {
    Array.from({length: n}, (_, i) => i + 1)
         .filter(isPrime)
         .forEach(prime => console.log(prime));
}
function isPrime(num) {
    return num > 1 && Array.from(
        {length: Math.sqrt(num)}, (_, i) => i + 2)
        .every(divisor => num % divisor !== 0);
}
printPrimeNumbers(100);


const data = [ 'ID, Name, Occupation, Age',
    '42, Bruce, Knight, 41',
    ' 57, Bob, Fry Cook, 19',
    '63, Blaine, Quiz Master, 58',
    '9 8, Bill, Doctors Assistant, 26' ]; 

    function CSVdata(csvString) {
        const lines = csvString.split('\n'); 
        const headers = lines[0].split(','); 
        const data2 = []; 
      
        for (let i = 1; i < lines.length; i++) { 
          const row = lines[i].split(','); 
          const rowData = {}; 
          for (let j = 0; j < headers.length; j++) {
            rowData[headers[j].toLowerCase()] = row[j]; 
          }
          data2.push(rowData); 
        }
        return data2; 
      }
    
      const transformedData = CSVdata(data[0]); 

      transformedData.pop(); 
      transformedData.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" }); 
      transformedData.push({ id: "7", name: "Bilbo", occupation: "Burglar", age: "111" }); 
      
      const totalAge = transformedData.reduce((sum, person) => sum + parseInt(person.age), 0); 
      const averageAge = totalAge / transformedData.length; 
      console.log("Average age:", averageAge); 

      function convertToCSV(data) { 
        const headers = Object.keys(data[0]); 
        const headerRow = headers.join(','); 
        const dataRows = data.map(row => headers.map( key => row[key]).join(',')).join('\n'); 
        return headerRow + '\n' + dataRows; 
      }
      const csvOutput = convertToCSV(transformedData); 
      console.log(csvOutput); 




