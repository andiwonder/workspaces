function solution(A, K) {
  if(K === A.length) return A;
  let prefix = A.slice(0, K  - 1);
  let suffix = A.slice(K - 1, A.length);
  return suffix.concat(prefix);
}