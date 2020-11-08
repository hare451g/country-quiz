const getIcon = (status) => {
  switch (status) {
    case 'INCORRECT':
      return 'clear';
    case 'CORRECT':
      return 'check';
    default:
      return '';
  }
};

export { getIcon };
