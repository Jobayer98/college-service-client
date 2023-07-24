const RecommendedResearchPapers = () => {
  // Sample data for recommended research papers
  const recommendedPapers = [
    {
      id: 1,
      title: "Lorem Ipsum Dolor Sit Amet",
      author: "John Doe",
      link: "https://example.com/paper1",
    },
    {
      id: 2,
      title: "Consectetur Adipiscing Elit",
      author: "Jane Smith",
      link: "https://example.com/paper2",
    },
    {
      id: 3,
      title: "Praesent eu Semper Diam",
      author: "Michael Johnson",
      link: "https://example.com/paper3",
    },
    // Add more recommended papers here...
  ];

  return (
    <div className="max-w-4xl mx-auto my-20">
      <h2 className="text-2xl font-bold mb-4">Recommended Research Papers</h2>
      <ul className="divide-y divide-gray-200">
        {recommendedPapers.map((paper) => (
          <li key={paper.id} className="py-4">
            <a
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-bold"
            >
              {paper.title}
            </a>
            <p className="text-gray-600">Author: {paper.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendedResearchPapers;
