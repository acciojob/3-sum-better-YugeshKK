function threeSum(arr, target) {
    // write your code here
      for (let index = 0; index < arr.length; index++) {
          let samp=[arr[index]];
          let j=index;
              while(samp.length<3){
                    j++;
                  samp[j]=arr[j];
              }
          let sum=0;
            for (let m = 0; m < samp.length; m++) {
                sum+=samp[m];
            }
          if(sum==target+1 || sum==target-1){
                return sum;
          }
      }
    }

module.exports = threeSum;
