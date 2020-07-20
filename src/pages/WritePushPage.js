import React, { useState } from 'react';
import WritePush from '../template/WritePush';
import { useForm } from 'react-hook-form';

export default function WritePushPage(props) {
  const { register, handleSubmit, watch, reset, errors } = useForm();
  const onSubmit = (data) => {
    setResult(JSON.stringify(data, null, 2));
  };
  const [result, setResult] = useState('');
  const watchInspectionDetail = watch("pet.inspection", props.set);

  const data = {
    title: 'PUSH 대상 설정',
    data: [
      {
        title: '1. 사용자',
        data: [
          {
            title: '성별',
            data: [
              {
                type: 'radio',
                id: 'member_sex_select1',
                name: 'member.sex',
                value: 'all',
                register: register,
                title: '항목 전체',
              },
              {
                type: 'radio',
                id: 'member_sex_select2',
                name: 'member.sex',
                value: 'female',
                register: register,
                title: '여성',
              },
              {
                type: 'radio',
                id: 'member_sex_select3',
                name: 'member.sex',
                value: 'male',
                register: register,
                title: '남성',
              },
            ],
          },
          {
            title: '연령대',
            data: [
              {
                type: 'checkbox',
                id: 'member_age_select1',
                name: 'member.age',
                value: 'all',
                register: register,
                title: '전연령',
              },
              {
                type: 'checkbox',
                id: 'member_age_select2',
                name: 'member.age',
                value: '10',
                register: register,
                title: '10대',
              },
              {
                type: 'checkbox',
                id: 'member_age_select3',
                name: 'member.age',
                value: '20',
                register: register,
                title: '20대',
              },
            ],
          },
        ],
      },
      {
        title: '2. 반려동물',
        data: [
          {
            title: '연령대',
            data: [
              {
                type: 'checkbox',
                id: 'pet_age_select1',
                name: 'pet.age',
                value: 'all',
                register: register,
                title: '전연령',
              },
              {
                type: 'checkbox',
                id: 'pet_age_select2',
                name: 'pet.age',
                value: '1',
                register: register,
                title: '1세 미만',
              },
              {
                type: 'checkbox',
                id: 'pet_age_select3',
                name: 'pet.age',
                value: '7',
                register: register,
                title: '1~7세 미만',
              },
            ],
          },
          {
            title: '검사횟수',
            data: {
              toggleFunction: watchInspectionDetail,
              toggleStyle: 'kg',
              toggle: [
                {
                  type: 'number',
                  id: 'pet_inspection_start',
                  name: 'pet.inspection_start',
                  register: register,
                  title: '',
                },
                {
                  type: 'number',
                  id: 'pet_inspection_end',
                  name: 'pet.inspection_end',
                  register: register,
                  title: '',
                },
              ],
              data: [
                {
                  type: 'radio',
                  id: 'pet_inspection_select1',
                  name: 'pet.inspection',
                  value: '',
                  register: register,
                  title: '미설정',
                },
                {
                  type: 'radio',
                  id: 'pet_inspection_select2',
                  name: 'pet.inspection',
                  value: 'set',
                  register: register,
                  title: '설정',
                },
              ],
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <WritePush title={data.title} onSubmit={handleSubmit(onSubmit)} data={data.data} />
      {result && <textarea style={{ height: '400px', width: '300px', marginTop: '30px' }} value={result} readOnly></textarea>}
    </>
  );
}
