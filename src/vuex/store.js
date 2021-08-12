/**
 * @author myname
 */

import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const _cf = (function () {
  function _shift(x) {
    const parts = x.split('.');
    return (parts.length < 2) ? 1 : Math.pow(10, parts[1].length);
  }

  return function () {
    return Array.prototype.reduce.call(arguments, function (prev, next) {
      return prev === undefined || next === undefined ? undefined : Math.max(prev, _shift(next));
    }, -Infinity);
  };
})();

Math.a = function () {
  const f = _cf.apply(null, arguments);
  if (f === undefined) return undefined;

  function cb(x, y) {
    return x + f * y;
  }

  return Array.prototype.reduce.call(arguments, cb, 0) / f;
};

Math.s = function (l, r) {
  const f = _cf(l, r);
  return (l * f - r * f) / f;
};

Math.m = function () {
  const f = _cf.apply(null, arguments);

  function cb(x, y) {
    return (x * f) * (y * f) / (f * f);
  }

  return Array.prototype.reduce.call(arguments, cb, 1);
};

Math.d = function (l, r) {
  const f = _cf(l, r);
  return (l * f) / (r * f);
};


const state = {
  currNum: "0",
  prevNum: null,
  operator: null,
  status: true, // false: input; true: waiting
  flag: false, // < 0 ?
  float: false,
  scientificNum: false,
}

const actions = {
  addNum(context, param) {
    context.commit("ADD_NUM", param.num)
  },
  addFloat(context, param) {
    context.commit("ADD_FLOAT", param.num)
  },
  getOppositeNum(context) {
    if (state.currNum !== "0") {
      context.commit("GET_OPPOSITE_NUM")
    }
  },
  backspaceNum(context) {
    context.commit("BACKSPACE_NUM")
  },
  toScientificNum(context) {
    context.commit("TO_SCIENTIFIC_NUM")
  },
  allClear(context) {
    context.commit("ALL_CLEAR")
  },
  division(context, param) {
    context.commit("DIVISION", param)
  }
}

const mutations = {
  ADD_NUM(state, value) {
    value = value.trim()
    if (state.status || state.currNum === "0") {
      state.currNum = value
      state.status = false
      return;
    }
    if (state.currNum !== value || value !== "0") {
      state.currNum = state.currNum.concat(value)
    }
  },
  ADD_FLOAT(state, value) {
    value = value.trim()
    if (!state.float) {
      state.currNum = state.currNum.concat(value)
      state.status = false
      state.float = true
    }
  },
  GET_OPPOSITE_NUM(state) {
    state.currNum = state.flag
      ? state.currNum.slice(1,)
      : "-".concat(state.currNum)
    state.flag = ~state.flag

  },
  BACKSPACE_NUM(state) {
    const n = state.currNum.length
    if (n > 2) {
      state.currNum = state.currNum.slice(0, state.currNum.length-1)
      return;
    }
    if (n === 1) {
      state.currNum = "0"
      return;
    }
    if (n === 2) {
      if (state.flag) {
        state.currNum = "0"
        return;
      }
    }
    state.currNum = state.currNum[0]
  },
  TO_SCIENTIFIC_NUM(state) {
    if (!state.scientificNum) {
      state.currNum = parseFloat(state.currNum).toExponential()
      state.scientificNum = true
      return;
    }
    state.currNum = "To Large"
    state.status = true
  },
  DIVISION: function (state, param) {
    const {numA, numB} = param
    const ans = Math.d(numA, numB)
    state.currNum = String(ans)
  },
  ALL_CLEAR(state) {
    state.currNum = "0"
    state.status = true
    state.float = false
    state.flag = false
    state.scientificNum = false
  },
}

const store = new Vuex.Store({
  state,
  actions,
  mutations,
})


export default store
