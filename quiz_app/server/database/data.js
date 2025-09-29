export default [
    {
        id: 1,
        question : "Javascript is an _______ language",
        category: "sports",
        options : [
            'Object-Oriented',
            'Object-Based',
            'Procedural',
        ]
    },
    {
        id: 2,
        question : "Following methods can be used to display data in some form using Javascript",
        category: "sports",
        options : [
            'document.write()',
            'console.log()',
            'window.alert()',
        ]
    },
    {
        id: 3,
        question : "When an operator value is NULL, the typeof returned by the unary operator is:",
        category: "sports",
        options : [
            'Boolean',
            'Undefined',
            'Object',
        ]
    },
    {
        id: 4,
        question : "What does the toString() method return?",
        category: "sports",
        options : [
            'Return Object',
            'Return String',
            'Return Integer'
        ]
    },
    {
        id: 5,
        question : "Which function is used to serialize an object into a JSON string?",
        category: "sports",
        options : [
            'stringify()',
            'parse()',
            'convert()',
            'NOTA'
        ]
    },
    {
        id: 6,
        question: "Which sorting algorithm has the worst-case time complexity of O(n²)?",
        category: "history",
        options: [
            'Quick Sort',
            'Merge Sort',
            'Bubble Sort',
            'Heap Sort'
        ]
    },
    {
        id: 7,
        question: "What is the time complexity of Breadth-First Search (BFS)?",
        category: "history",
        options: [
            'O(V+E)',
            'O(V²)',
            'O(VE)',
            'O(V log V)'
        ]
    },
    {
        id: 8,
        question: "How do you detect a cycle in a directed graph?",
        category: "history",
        options: [
            'Breadth-First Search',
            'Depth-First Search',
            'Kruskal\'s Algorithm',
            'Bellman-Ford Algorithm'
        ]
    },
    {
        id: 9,
        question: "What data structure is used for implementing recursion?",
        category: "history",
        options: [
            'Stack',
            'Queue',
            'Linked List',
            'Array'
        ]
    },
    {
        id: 10,
        question: "Which algorithm is used to find the shortest path in a weighted graph?",
        category: "history",
        options: [
            'Depth-First Search',
            'Prim’s Algorithm',
            'Dijkstra’s Algorithm',
            'Floyd-Warshall Algorithm'
        ],
        answer: 'Dijkstra’s Algorithm'
    },
    {
        id: 11,
        question: "What is the best-case time complexity of Quick Sort?",
        category: "technology",
        options: [
            'O(n²)',
            'O(n log n)',
            'O(n)',
            'O(log n)'
        ]
    },
    {
        id: 12,
        question: "What is the purpose of the 'heapify' process in heap sort?",
        category: "technology",
        options: [
            'To sort the array',
            'To build a heap from an array',
            'To merge sorted arrays',
            'To find the maximum value'
        ]
    },
    {
        id: 13,
        question: "Which tree traversal visits the nodes in sorted order in a binary search tree?",
        category: "technology",
        options: [
            'Pre-order',
            'Post-order',
            'Level-order',
            'In-order'
        ]
    },
    {
        id: 14,
        question: "What is the space complexity of Merge Sort?",
        category: "technology",
        options: [
            'O(1)',
            'O(n)',
            'O(log n)',
            'O(n²)'
        ]
    },
    {
        id: 15,
        question: "What is the time complexity of inserting an element in a max heap?",
        category: "technology",
        options: [
            'O(1)',
            'O(log n)',
            'O(n)',
            'O(n²)'
        ]
    }
    
];

export const answers = [0, 1, 2, 1, 0, 2, 0, 1, 0, 2, 1, 3, 1, 1,0];