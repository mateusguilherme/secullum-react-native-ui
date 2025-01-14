import * as React from 'react';
import { getTheme } from '../modules/theme';
import { isTablet } from '../modules/layout';

import {
  KeyboardType,
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
  TextInputProps,
  ReturnKeyTypeOptions
} from 'react-native';

export interface TextBoxInputProps extends TextInputProps {
  ref: (ref: TextInput) => void;
}

interface SelectionStyle {
  start: number;
  end?: number;
}

export interface TextBoxProperties {
  autoFocus?: boolean;
  label: string;
  value: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  renderInput?: (props: TextBoxInputProps) => JSX.Element;
  onSubmitEditing?: () => void;
  inputRef?: (value: TextInput) => void;
  secureTextEntry?: boolean;
  multiline?: boolean;
  keyboardType?: KeyboardType;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  inputStyle?: StyleProp<TextStyle>;
  editable?: boolean;
  autoCorrect?: boolean;
  maxLength?: number;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  returnKeyType?: ReturnKeyTypeOptions;
  blurOnSubmit?: boolean;
  nativeID?: string;
  selection?: SelectionStyle;
}

export class TextBox extends React.Component<TextBoxProperties> {
  input: TextInput | null = null;

  static defaultProps = {
    editable: true,
    autoCorrect: false,
    blurOnSubmit: true
  };

  getStyles = () => {
    const theme = getTheme();

    const styles = StyleSheet.create({
      container: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: theme.borderColor1,
        borderRadius: 3
      },
      label: {
        color: theme.textColor2,
        fontFamily: 'Lato-Regular',
        fontSize: isTablet() ? 15 : 12,
        lineHeight: 16
      },
      input: {
        color: theme.textColor1,
        fontFamily: 'Lato-Bold',
        fontWeight: 'normal',
        fontSize: 16,
        minHeight: 22,
        padding: 0,
        margin: 0,
        ...(Platform.OS === 'web' ? { outline: '0' } : {})
      },
      readonly: {
        backgroundColor: theme.disabledColor
      }
    });

    return styles;
  };

  focus = () => {
    if (this.input) {
      this.input.focus();
    }
  };

  renderInput = (props: TextInputProps) => <TextInput {...props} />;

  render() {
    const {
      label,
      style,
      labelStyle,
      editable,
      inputRef,
      renderInput
    } = this.props;

    const styles = this.getStyles();

    const incomingProps: TextBoxInputProps = {
      nativeID: this.props.nativeID,
      autoFocus: this.props.autoFocus,
      value: this.props.value,
      onChangeText: this.props.onChange,
      onBlur: this.props.onBlur,
      style: [
        styles.input,
        this.props.inputStyle,
        this.props.editable ? null : styles.readonly
      ],
      underlineColorAndroid: 'transparent',
      secureTextEntry: this.props.secureTextEntry,
      multiline: this.props.multiline,
      editable: this.props.editable,
      keyboardType: this.props.keyboardType,
      maxLength: this.props.maxLength,
      onSubmitEditing: this.props.onSubmitEditing,
      autoCapitalize: this.props.autoCapitalize,
      autoCorrect: this.props.autoCorrect,
      returnKeyType:
        Platform.OS === 'ios' &&
        this.props.keyboardType === 'numeric' &&
        this.props.returnKeyType === 'next'
          ? 'done'
          : this.props.returnKeyType,
      ref: (input: TextInput) => {
        this.input = input;
        if (inputRef) inputRef(input);
      },
      selection: this.props.selection
    };

    return (
      <TouchableWithoutFeedback
        accessible={false}
        disabled={!editable}
        onPress={() => {
          this.focus();
        }}
      >
        <View
          style={[styles.container, style, editable ? null : styles.readonly]}
        >
          <Text style={[styles.label, labelStyle]}>{label}</Text>
          {renderInput
            ? renderInput(incomingProps)
            : this.renderInput(incomingProps)}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
