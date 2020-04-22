let findTheOldest = function(persons) {
    var oldestPerson = persons.reduce((previousOldestPerson, currentPerson) => {
        var previousOldestPersonAge = getAge(previousOldestPerson);
        var currentPersonAge = getAge(currentPerson);
        console.log(previousOldestPersonAge, currentPersonAge);
        return previousOldestPersonAge < currentPersonAge ? currentPerson : previousOldestPerson
    })
    return oldestPerson;

}

function getAge (person) {
    if (person.yearOfDeath == null){
        return (new Date().getFullYear - person.yearOfBith);
    } else {
        return person.yearOfDeath - person.yearOfBith;
    }
}
var f = [];
f.redu
module.exports = findTheOldest
