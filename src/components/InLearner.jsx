const InLearner = ({ learner }) => {
    return (
      <div>
        <h2>{learner.name}</h2>
        <p>{learner.bio}</p>
        <ul>
          {learner.scores.map((score, index) => (
            <li key={index}>date {score.date} - grade {score.score}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default InLearner;