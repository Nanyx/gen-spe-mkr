import info from '../models/info';

const Info = ({spec, career, skills, onChange}) => {

  const changeSpec = (s) => onChange(new info(career, s, skills));
  const changeCareer = (c) => onChange(new info(c, spec, skills));
  const changeSkills = (s) => onChange(new info(career, spec, s));

  return (
    <div className="info">
      <Career value={career} onChange={changeSpec}/>
      <Specialization value={spec} onChange={changeCareer}/>
      <Skills value={skills} onChange={changeSkills}/>
    </div>
  );
}

export default Info;


const Career = ({value, onChange = ()=>{}}) => (
  <div>
    <input
      className="form-control form-control-lg text-uppercase" 
      placeholder="CAREER" value={value} 
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

const Specialization = ({value, onChange = ()=>{}}) => (
  <div>
    <input className="form-control form-control-xl text-uppercase" 
      placeholder="SPECIALIZATION" value={value} 
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
)

const Skills = ({value, onChange = ()=>{}}) => (
  <div className="d-flex">
    <div className="align-self-center text">Spec. Bonus Career Skills:</div>
    <div className="flex-grow-1">
      <input type="text" className="form-control" 
        placeholder="Skill list" value={value} 
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  </div>
);