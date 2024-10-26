import { useState, useEffect } from 'react';

type ModuleState = {
  isActive: boolean;
  data: any;
};

const useModule = (initialData: any) => {
  const [moduleState, setModuleState] = useState<ModuleState>({
    isActive: false,
    data: initialData,
  });

  const activateModule = () => {
    setModuleState((prevState) => ({ ...prevState, isActive: true }));
  };

  const deactivateModule = () => {
    setModuleState((prevState) => ({ ...prevState, isActive: false }));
  };

  const updateData = (newData: any) => {
    setModuleState((prevState) => ({ ...prevState, data: newData }));
  };

  useEffect(() => {
    // Example effect: log when the module is activated or deactivated
    console.log(`Module is now ${moduleState.isActive ? 'active' : 'inactive'}.`);
  }, [moduleState.isActive]);

  return {
    moduleState,
    activateModule,
    deactivateModule,
    updateData,
  };
};

export default useModule;