import React, {createContext, useContext, useState, ReactNode} from 'react';
import {View, Text, Switch, TouchableOpacity, StyleSheet} from 'react-native';

// Define the type for the context value
type Theme = 'light' | 'dark';

// Create a context with a default value of null
const ThemeContext = createContext<Theme | null>(null);

const DemoDarkMode: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('light');
  return (
    <ThemeContext.Provider value={theme}>
      <View style={[styles.container, styles[`background-${theme}`]]}>
        <Form />
        <View style={styles.switchContainer}>
          <Switch
            value={theme === 'dark'}
            onValueChange={value => {
              setTheme(value ? 'dark' : 'light');
            }}
          />
          <Text style={[styles.switchLabel, styles[`text-${theme}`]]}>
            Use dark mode
          </Text>
        </View>
      </View>
    </ThemeContext.Provider>
  );
};

const Form: React.FC = () => {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
};

interface PanelProps {
  title: string;
  children?: ReactNode;
}

const Panel: React.FC<PanelProps> = ({title, children}) => {
  const theme = useContext(ThemeContext);
  if (theme === null) {
    throw new Error('ThemeContext must be used within a ThemeContext.Provider');
  }

  return (
    <View style={[styles.panel, styles[`panel-${theme}`]]}>
      <Text style={[styles.title, styles[`text-${theme}`]]}>{title}</Text>
      {children}
    </View>
  );
};

interface ButtonProps {
  children?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({children}) => {
  const theme = useContext(ThemeContext);
  if (theme === null) {
    throw new Error('ThemeContext must be used within a ThemeContext.Provider');
  }

  return (
    <TouchableOpacity style={[styles.button, styles[`button-${theme}`]]}>
      <Text style={[styles.buttonText, styles[`text-${theme}`]]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  switchLabel: {
    marginLeft: 8,
  },
  panel: {
    width: '100%',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 8,
  },
  button: {
    padding: 12,
    borderRadius: 4,
    marginVertical: 4,
  },
  buttonText: {
    fontSize: 16,
  },
  'panel-light': {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    color: '#fff',
  },
  'panel-dark': {
    backgroundColor: '#333',
    color: '#412231',
  },
  'button-light': {
    backgroundColor: '#ddd',
    color: '#841584',
  },
  'button-dark': {
    backgroundColor: '#555',
    color: '#fff',
  },
  'text-light': {
    color: '#000',
  },
  'text-dark': {
    color: '#fff',
  },
  'background-light': {
    backgroundColor: '#fff',
  },
  'background-dark': {
    backgroundColor: '#000',
  },
});

export default DemoDarkMode;
