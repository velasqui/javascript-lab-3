const submissions = [
    {
        name: 'Jane',
        score: 95, 
        date: '2020-01-24',
        passed: true,
    },
    {
        name: 'Joe',
        score: 77, 
        date: '2018-05-14',
        passed: true,
    },
    {
        name: 'Jack',
        score: 59, 
        date: '2019-07-05',
        passed: false,
    },
    {
        name: 'Jill',
        score: 88, 
        date: '2020-04-22',
        passed: true,
    },
];

// console.log(submissions);

const addSubmission = (array, newName, newScore, newDate) => {
    const newSubmission = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: newScore >= 60 ? true : false,
    };

    array.push(newSubmission);
};

// addSubmission(submissions, 'Jonas', 70, '2022-05-08');
// console.log(submissions);

function deleteSubmissionByIndex(array, index) {
    array.splice(index, 1);
};

// deleteSubmissionByIndex(submissions, 1);
// console.log(submissions);

function deleteSubmissionByName(array, name) {
    const index = array.findIndex((submissionObject) => submissionObject.name === name);

    array.splice(index, 1);
};

// deleteSubmissionByName(submissions, 1);
// console.log(submissions);

function editSubmission(array, index, score) {
    array[index].score = score;
    array[index].passed = score >= 60 ? true : false;
};

// editSubmission(submissions, 2, 61);
// console.log(submissions);

function findSubmissionByName(array, name) {
    const result = array.find(submission => submission.name === name);
    return result;
}

// console.log(findSubmissionByName(submissions, 'Joe'));

function findLowestScore(array) {
    let total = 0;

    array.forEach(function(score, index) {
        total += score;
    });

    return total / array.length;
};

// console.log(findLowestScore(submissions))

const filteredPassing = submissions.filter(array => array.passed === true);

// console.log(filteredPassing);

const filter90AndAbove = submissions.filter(array => array.score >= 90);

// console.log(filter90AndAbove);

