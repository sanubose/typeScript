
function getThirdElement<T>(arr: T[]): T | undefined {
    
    if (arr.length < 3) {
      console.log("Array has fewer than three elements.");
      return undefined;
    }
    return arr[2]; 
  }
  
  
  const numbers = [1, 2, 3, 4];
  const words = ["apple", "banana", "cherry", "date"];
  
  
  console.log(getThirdElement(numbers)); 
  console.log(getThirdElement(words));  
  
  
  const smallArray = [1, 2];
  console.log(getThirdElement(smallArray)); 
  