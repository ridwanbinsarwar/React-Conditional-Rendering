export default function IF({ children, condition }: any) {
    if (condition) {
      return children;
    } 
    return null;
  }
  
