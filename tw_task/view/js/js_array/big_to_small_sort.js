var numbers= [5,1,8,10,4];
function compare(val1,val2)
{
      if(val1 > val2)
      {
         return -1;
      }
      else if(val1 < val2)
      {
         return 1;
      }
      else{
         return 0;
      }
}
numbers.sort(compare)
