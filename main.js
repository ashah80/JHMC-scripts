// updated by skyelar -> this launches the server onto express js
// jhmc online academy chapter 1 so far
const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// for test (chapter 1)
app.get('/test', (req, res) => {
    res.render('pages/test', {
        title: 'Home Page',
        breadcrumb: 'Online Academy > Chapter 1',
        chapterTitle: 'Chapter 1: Intro To Combinatorics',
        imageSrc: '/images/placeholder.jpg', //when will sends img !!!
        lastEdited: 'NA',
        countLink: '/count',
        countDescription: 'A brief description of Counting.',
        probabilityLink: '/probability',
        probabilityDescription: 'A brief description of Probability.',
        explanation: 'Combinatorics is one of the four main areas of competition math and is made up of two smaller subsections: counting and probability. Counting is all about finding out how many “cases” or “states” satisfy a certain condition. Probability, conversely, is about finding the chance that something succeeds or fails. Combinatorial problems often deal with percentages, fractions, and large numbers. There is a distinct simplicity within combinatorics compared to the other three competition categories, as the only requirement for the vast majority of high school-level or below problems showing up in competition is arithmetic…'
    });
});

// for counting (page #1 within chatper 1)
app.get('/count', (req, res) => {
    res.render('pages/count', {
        pageTitle: 'Counting',
        breadcrumb: 'Online Academy > Chapter 1 > Counting',
        chapterTitle: 'Chapter 1: Intro To Combinatorics',
        imageSrc: '/images/placeholder.jpg', //when will sends img !!!
        lastEdited: 'NA',
        sectionTitle: 'Section 1.1: Counting',
        explanation: 'Counting is the simpler of the two main fields within combinatorics, so we’ll start with this one first. As stated before, counting fundamentally boils down to figuring out the number of “cases” that satisfy a certain amount of conditions. As a simple example problem, let’s say that a farmer has 36 pigs on his farm, and half of them are colored blue while the other half are colored red. We want to figure out how many total blue legs (that belong to livestock) are on his farmland. Assuming that all of his pigs have 4 legs, then our answer would be \( 36 \cdot 4 \cdot \frac{1}{2} = \boxed{72} \) legs in total. Here, a case would be a leg and the condition is that they must be blue...',
        fundamentals: [
            { name: 'Direct Counting', subcategories: ['Explanation', 'Rules, Examples, Explanations (5+)', 'Exercises (5+)'] },
            { name: 'Complementary Counting' },
            { name: 'Casework' },
            { name: 'Counting with Restrictions' },
            { name: 'Overcounting' }
        ],
        techniquesDescription: 'stuff',
        techniques: ['Permutations', 'Combinations'],
        prevLink: '/test',
        nextLink: '/counting'
    });
});

//start
app.listen(3000, () => {
    console.log('server is starting...');
});
