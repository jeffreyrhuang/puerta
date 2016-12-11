import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { selectModalOption } from '../../actions';
import { Container, SectionHeader, ModalSelect, FormFooter } from '../common';

class Diagnostic1 extends Component {
  render() {
    return (
      <Container>
        <ScrollView>
          <SectionHeader>Estado del Portón</SectionHeader>
          <ModalSelect
            name={'diag1'}
            topic={'1. La puerta o portón se mueve libre y con facilidad manualmente?*'}
            data={[
              { option: 'Si, puerta/portón se mueve con facilidad' },
              { option: 'No, daños en montaje o rodamiento' },
              { option: 'No, falta limpieza' },
              { option: 'No, portón muy grande duro de mover' }
            ]}
            isFilled={this.props.diag1.isFilled}
            value={this.props.diag1.value}
            onChange={({ prop, value, isFilled }) => {
              this.props.selectModalOption({ prop, value, isFilled });
            }}
          />

          <ModalSelect
            name={'diag2'}
            topic={'2. La puerta o portón llega a los extremos de forma precisa? (En corredizos, requiere una luz antes del tope de 2cm)'}
            data={[
              { option: 'Si, La puerta llega exacta' },
              { option: 'No, puerta golpea al llegar (normal en algunos modelos)' },
              { option: 'No, puerta le falta llegar' },
              { option: 'No, puerta llega desviada' },
              { option: 'No, otro problema en puerta' }
            ]}
            isFilled={this.props.diag2.isFilled}
            value={this.props.diag2.value}
            onChange={({ prop, value, isFilled }) => {
              this.props.selectModalOption({ prop, value, isFilled });
            }}
          />
        </ScrollView>
        <FormFooter onPressNext={Actions.diag2} />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    diag1: state.diagnosticForm.diag1,
    diag2: state.diagnosticForm.diag2
  };
};

export default connect(mapStateToProps, { selectModalOption })(Diagnostic1);