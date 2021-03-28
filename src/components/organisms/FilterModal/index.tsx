import React, { useCallback, useState } from 'react';

import { useHousesHooks } from '~/services/hooks';

import { InputSectionLabel, Button } from '~/components/atoms';
import { Modal, Input } from '~/components/molecules';

import { FilterContainer, InputsRowContainer, InputsRowItem } from './styles';

type FilterModalProps = {
  visible: boolean;
  onClose: () => void;
};

export const FilterMoal = ({
  visible,
  onClose,
}: FilterModalProps): JSX.Element => {
  const { onFilterHouseList } = useHousesHooks();

  const [form, setForm] = useState({
    sizeMin: '',
    sizeMax: '',
    priceMin: '',
    priceMax: '',
    bedsMin: '',
    bathsMin: '',
  });

  const onClickApply = useCallback(() => {
    onFilterHouseList(form);
    onClose();
  }, [form]);

  const handleForm = useCallback((value, field) => {
    setForm(prevState => ({ ...prevState, [field]: value }));
  }, []);

  return (
    <Modal visible={visible} onClose={onClose} title="Filtrar">
      <FilterContainer>
        <InputSectionLabel mt={12} mb={6}>
          Tamanho
        </InputSectionLabel>
        <InputsRowContainer>
          <InputsRowItem>
            <Input
              value={form.sizeMin}
              onChangeText={value => handleForm(value, 'sizeMin')}
              keyboardType="numeric"
              label="Minimo"
              placeholder="Ex. 77"
            />
          </InputsRowItem>
          <InputsRowItem>
            <Input
              value={form.sizeMax}
              onChangeText={value => handleForm(value, 'sizeMax')}
              keyboardType="numeric"
              label="Maximo"
              placeholder="Ex. 200"
            />
          </InputsRowItem>
        </InputsRowContainer>

        <InputSectionLabel mt={12} mb={6}>
          Preço
        </InputSectionLabel>
        <InputsRowContainer>
          <InputsRowItem>
            <Input
              value={form.priceMin}
              onChangeText={value => handleForm(value, 'priceMin')}
              keyboardType="numeric"
              label="Minimo"
              placeholder="Ex. 500"
            />
          </InputsRowItem>
          <InputsRowItem>
            <Input
              value={form.priceMax}
              onChangeText={value => handleForm(value, 'priceMax')}
              keyboardType="numeric"
              label="Maximo"
              placeholder="Ex. 2000"
            />
          </InputsRowItem>
        </InputsRowContainer>

        <InputSectionLabel mt={12} mb={6}>
          Quartos
        </InputSectionLabel>
        <InputsRowContainer>
          <InputsRowItem>
            <Input
              value={form.bedsMin}
              onChangeText={value => handleForm(value, 'bedsMin')}
              keyboardType="numeric"
              label="Minimo"
              placeholder="Ex. 2"
            />
          </InputsRowItem>
        </InputsRowContainer>

        <InputSectionLabel mt={12} mb={6}>
          Banheiros
        </InputSectionLabel>
        <InputsRowContainer>
          <InputsRowItem>
            <Input
              value={form.bathsMin}
              onChangeText={value => handleForm(value, 'bathsMin')}
              keyboardType="numeric"
              label="Minimo"
              placeholder="Ex. 1"
            />
          </InputsRowItem>
        </InputsRowContainer>
      </FilterContainer>

      <Button mt={24} text="Aplicar" onPress={onClickApply} />
    </Modal>
  );
};
