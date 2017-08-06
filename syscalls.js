/* Holds system call wrapper offsets for user's specific firmware */
window.syscalls = [];

/* These are the offsets in libkernel for system call wrappers */
window.syscallMap =
{
  '3.55':
  {
    20: 0xACE0,
    24: 0xAD60
  },

  '4.81':
  {
    20: 0xACE0,
    24: 0xAD60
  }
}

// System Calls Used
window.syscallnames =
{
	"sys_ss_get_console_id": 870,
	"sys_ss_get_open_psid": 872
}
