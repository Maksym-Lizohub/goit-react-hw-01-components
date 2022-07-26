const Statistics = ({ title }, { data }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {data.map(el => (
          <li className="item" key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Statistics;