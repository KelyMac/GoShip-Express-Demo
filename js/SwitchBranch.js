import React, { useState } from 'react';

export function SwitchBranch() {
  const [activeBranch, setActiveBranch] = useState('canada');

  const switchBranch = (branch) => {
    setActiveBranch(branch);
  };

  return (
    <div>
      <button className={activeBranch === 'canada' ? 'active' : ''} onClick={() => switchBranch('canada')}>Canada</button>
      <button className={activeBranch === 'china' ? 'active' : ''} onClick={() => switchBranch('china')}>China</button>
      <div style={{display: activeBranch === 'canada' ? 'block' : 'none'}}>Canada Branch Info</div>
      <div style={{display: activeBranch === 'china' ? 'block' : 'none'}}>China Branch Info</div>
    </div>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <GoogleMapComponent />
    <SwitchBranch />
  </React.StrictMode>,
  document.getElementById('root')
);
