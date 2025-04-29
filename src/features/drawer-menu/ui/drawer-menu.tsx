import React, { useState } from 'react';
import { CatalogueContent } from './catalogue-content/catalogue-content';
import { MenuContent } from './menu-content/menu-content';

export const DrawerMenu = () => {
  const [step, setStep] = useState(0);

  return (
    <React.Fragment>
      {step === 0 && <MenuContent setStep={setStep} />}
      {step === 1 && <CatalogueContent setStep={setStep} />}
    </React.Fragment>
  );
};
