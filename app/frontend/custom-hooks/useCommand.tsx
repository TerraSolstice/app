import { useState, useCallback } from 'react';

type Command = {
  name: string;
  execute: () => void;
};

const useCommands = () => {
  const [commands, setCommands] = useState<Command[]>([]);

  const addCommand = useCallback((command: Command) => {
    setCommands((prevCommands) => [...prevCommands, command]);
  }, []);

  const removeCommand = useCallback((commandName: string) => {
    setCommands((prevCommands) =>
      prevCommands.filter((command) => command.name !== commandName)
    );
  }, []);

  const executeCommand = useCallback((commandName: string) => {
    const command = commands.find((cmd) => cmd.name === commandName);
    if (command) {
      command.execute();
    } else {
      console.warn(`Command "${commandName}" not found.`);
    }
  }, [commands]);

  return {
    commands,
    addCommand,
    removeCommand,
    executeCommand,
  };
};

export default useCommands;