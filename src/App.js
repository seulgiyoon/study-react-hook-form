import React, { useState } from 'react';
import './App.css';
import { useForm } from 'react-hook-form';

export default function App(props) {
  const { register, handleSubmit, watch, reset, errors } = useForm();
  const onSubmit = (data) => {
    if (data.pet.weight_start && data.pet.weight_end === '') {
      data.pet.weight_end = '1000';
    }
    if (data.pet.weight_start > data.pet.weight_end) {
      console.log('error');
    }
    setResult(JSON.stringify(data, null, 2));
    console.log(data);
  };

  const [result, setResult] = useState('');
  const watchCheck = watch('member_subscribe', props.set);
  const watchPetWeightSet = watch('pet_weight', props.set);
  const watchPetWeightUnset = watch('pet_weight', props.unset);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* TYPE 1 */}
        <div>
          <label htmlFor="member_sex_select_1">
            <input type="radio" id="member_sex_select_1" name="member.sex" value="all" ref={register} />
            항목 전체
          </label>
          <label htmlFor="member_sex_select_2">
            <input type="radio" id="member_sex_select_2" name="member.sex" value="female" ref={register} />
            여성
          </label>
          <label htmlFor="member_sex_select_3">
            <input type="radio" id="member_sex_select_3" name="member.sex" value="male" ref={register} />
            남성
          </label>
        </div>
        {/* TYPE 2 */}
        <div>
          <label htmlFor="member_age_select_1">
            <input type="checkbox" id="member_age_select_1" name="member.age" value="all" ref={register} />전 연령
          </label>
          <label htmlFor="member_age_select_2">
            <input type="checkbox" id="member_age_select_2" name="member.age" value="10" ref={register} />
            10대
          </label>
          <label htmlFor="member_age_select_3">
            <input type="checkbox" id="member_age_select_3" name="member.age" value="20" ref={register} />
            20대
          </label>
          <label htmlFor="member_age_select_4">
            <input type="checkbox" id="member_age_select_4" name="member.age" value="30" ref={register} />
            30대
          </label>
        </div>
        {/* TYPE 3 -> 라디오와 체크박스를 섞는게 부자연스럽고 데이터 처리에 좋지 않다. 그래서 설정을 눌렀을 때 체크박스가 나오게 하는 방법 */}
        <div>
          {/* <label htmlFor="member_subscribe_select_1">
          <input type="radio" id="member_subscribe_select_1" name="member_subscribe" value="" ref={register} />
          미설정
        </label> */}
          {/* <label htmlFor="member_subscribe_select_2">
          <input type="radio" id="member_subscribe_select_2" name="member_subscribe" value="set" ref={register} />
          설정
        </label> */}
          {/* {watchCheck && (
          <div> */}
          <label htmlFor="member_subscribe_select_3">
            <input type="checkbox" id="member_subscribe_select_3" name="member.subscribe" value="all" ref={register} />
            항목 전체
          </label>
          <label htmlFor="member_subscribe_select_4">
            <input type="checkbox" id="member_subscribe_select_4" name="member.subscribe" value="subscribe" ref={register} />
            구독
          </label>
          <label htmlFor="member_subscribe_select_5">
            <input type="checkbox" id="member_subscribe_select_5" name="member.subscribe" value="unsubscribe" ref={register} />
            구독 해지
          </label>
          {/* </div>
        )} */}
        </div>

        {/* TYPE 4 */}
        {/* <div>
        <label htmlFor="pet_weight_select_1">
          <input type="radio" id="pet_weight_select_1" name="pet_weight" value="" ref={register} />
          미설정
        </label>
        <label htmlFor="pet_weight_select_2">
          <input type="radio" id="pet_weight_select_2" name="pet_weight" value="set" ref={register} />
          설정
        </label>
        <input type="number" name="pet_weight_start" ref={register} disabled={!watchPetWeightSet} />
        ~
        <input type="number" name="pet_weight_end" ref={register} disabled={!watchPetWeightSet} />
        kg
      </div> */}

        {/* TYPE 4 - 1 */}
        <div>
          <input
            type="number"
            name="pet.weight_start"
            ref={register({
              min: {
                value: 0,
                message: '시작하는 숫자는 0보다 크게 입력해주세요.',
              },
            })}
          />
          ~
          <input type="number" name="pet.weight_end" ref={register} />
          kg
          {/* 어쩐지 리셋이 전체로만 먹음 */}
          <input
            type="button"
            onClick={() => {
              reset({
                pet: {
                  weight_start: '',
                  weight_end: '',
                },
              });
            }}
            value="초기화"
          />
          {/* 에러 메시지 노출 -> 모달화 가능 */}
          {errors.pet?.weight_start && <p className="error">{errors.pet?.weight_start.message}</p>}
        </div>
        {/* dropdown */}
        {/* <div>
        <select name="gender" ref={register}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
      </div> */}
        <div>
          <input type="submit" />
        </div>
      </form>
      {result && <textarea style={{ height: '400px', width: '300px' }} value={result}></textarea>}
    </>
  );
}
