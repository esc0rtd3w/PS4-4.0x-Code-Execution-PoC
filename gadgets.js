/* For storing the gadget and import map */
window.gadgetMap = [];
window.basicImportMap = [];

/* All function stubs / imports from other modules */
var generateBasicImportMap = function()
{
  window.basicImportMap =
  {
    '3.55':
    {
      'setjmp':            getGadget('libSceWebKit2', 0x2B8),     // setjmp imported from libkernel
      '__stack_chk_fail':  getGadget('libSceWebKit2', 0x276D150), // __stack_chk_fail imported from libkernel
    },

    '4.81':
    {
      'setjmp':            getGadget('libSceWebKit2', 0x2B8),     // setjmp imported from libkernel
      '__stack_chk_fail':  getGadget('libSceWebKit2', 0x276D150), // __stack_chk_fail imported from libkernel
    }
  };
}

/* All gadgets from the binary of available modules */
var generateGadgetMap = function()
{
  window.gadgetMap =
  {
    '3.55':
    {
      'pop rsi':  getGadget('libSceWebKit2', 0xB9EBB),
      'pop rdi':  getGadget('libSceWebKit2', 0x113991),
      'pop rax':  getGadget('libSceWebKit2', 0x1C6AB),
      'pop rcx':  getGadget('libSceWebKit2', 0x3CA9FD),
      'pop rdx':  getGadget('libSceWebKit2', 0x1AFA),
      'pop r8':   getGadget('libSceWebKit2', 0x4C13BD),
      'pop r9':   getGadget('libSceWebKit2', 0xEE0A8F),
      'pop rsp':  getGadget('libSceWebKit2', 0x376850),

      'mov rax, rdi':             getGadget('libSceWebKit2', 0x57C3),
      'mov qword ptr [rdi], rax': getGadget('libSceWebKit2', 0x11FC37),
      'mov qword ptr [rdi], rsi': getGadget('libSceWebKit2', 0x4584D0),

      'jmp addr': getGadget('libSceWebKit2', 0x86D4F4),
    },

    '4.81':
    {
      'pop rsi':  getGadget('libSceWebKit2', 0xB9EBB),
      'pop rdi':  getGadget('libSceWebKit2', 0x113991),
      'pop rax':  getGadget('libSceWebKit2', 0x1C6AB),
      'pop rcx':  getGadget('libSceWebKit2', 0x3CA9FD),
      'pop rdx':  getGadget('libSceWebKit2', 0x1AFA),
      'pop r8':   getGadget('libSceWebKit2', 0x4C13BD),
      'pop r9':   getGadget('libSceWebKit2', 0xEE0A8F),
      'pop rsp':  getGadget('libSceWebKit2', 0x376850),

      'mov rax, rdi':             getGadget('libSceWebKit2', 0x57C3),
      'mov qword ptr [rdi], rax': getGadget('libSceWebKit2', 0x11FC37),
      'mov qword ptr [rdi], rsi': getGadget('libSceWebKit2', 0x4584D0),

      'jmp addr': getGadget('libSceWebKit2', 0x86D4F4),
    }
  };
}
