/*
The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

    If teamOne[i] > teamTwo[i], then teamOne is awarded 1 point.
    If teamOne[i] < teamTwo[i], then teamTwo is awarded 1 point.
    If teamOne[i] = teamTwo[i], then neither teams receives a point.

Comparison points is the total points a team earned.

Given a and b, determine their respective comparison points. 

Result Array int[2]: Team One's score is in the first position, and Team Two's score is in the second. 

*/


function compareTriplets(a, b) {
    const totalPoints = [0,0];
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]){
            totalPoints[0] += 1;
        } else if (a[i] < b[i]) {
            totalPoints[1] += 1;
        }        
    }
    return totalPoints;
}

    
const teamOne = [75, 100, 95];
const teamTwo = [100,85,70];
    
const result = compareTriplets(teamOne, teamTwo);

console.log(result);
    
