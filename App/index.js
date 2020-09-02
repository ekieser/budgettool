function percentNeces() {
  $('#budgetform').submit(function(event) {
        event.preventDefault();
        let userNum = $('#income-num').val();
        let necMath = (60/100)*userNum;
        $('#sixty').append(
            `<p id="sixty">Necessities: ${necMath}</p>`
        );
    }
)}

function percentWants() {
    $('#budgetform').submit(function(event) {
          event.preventDefault();
          let userNum = $('#income-num').val();
          let wantMath = (20/100)*userNum;
          $('#twenty').append(
              `<p id="twenty">Wants: ${wantMath}</p>`
          );
      }
  )}
function percentSave() {
    $('#budgetform').submit(function(event) {
        event.preventDefault();
        let userNum = $('#income-num').val();
        let saveMath = (20/100)*userNum;
        $('#twentytwo').append(
            `<p id="twentytwo">Savings: ${saveMath}</p>`
        );
    }
)}

function addToNeces() {
    $('#nc-budget-list-form').submit(function(event) {
        event.preventDefault();
        const userText = $('#budget-list-entry').val();
        const userCostNeces = $('#budget-list-cost').val();
        $('#budget-list-entry').val('');
        $('#budget-list-cost').val('');
        $('.budget-list').prepend(
            `<li>
                <span class="budget-item">${userText}</span>
                <span class="budget-cost">$${userCostNeces}</span>
                <div class="budget-item-controls">
                    <button class="budget-item-toggle">
                    <span class="button-label">Check</span>
                    </button>
                    <button class="budget-item-delete">
                    <span class="button-label">Delete</span>
                    </button>
                </div>
            </li>`
            );
        });
};

function addToWants() {
    $('#wa-budget-list-form').submit(function(event) {
        event.preventDefault();
        const userText = $('#wa-budget-list-entry').val();
        const userCostWants = $('#wa-budget-list-cost').val();
        $('#budget-list-entry').val('');
        $('#budget-list-cost').val('');
        $('.budget-list').prepend(
            `<li>
                <span class="budget-item">${userText}</span>
                <span class="budget-cost">$${userCostWants}</span>
                <div class="budget-item-controls">
                    <button class="budget-item-toggle">
                    <span class="button-label">Check</span>
                    </button>
                    <button class="budget-item-delete">
                    <span class="button-label">Delete</span>
                    </button>
                </div>
            </li>`
            );
        });
};

function addToSave() {
    $('#sv-budget-list-form').submit(function(event) {
        event.preventDefault();
        const userText = $('#sv-budget-list-entry').val();
        const userCostSave = $('#sv-budget-list-cost').val();
        $('#budget-list-entry').val('');
        $('#budget-list-cost').val('');
        $('.budget-list').prepend(
            `<li>
                <span class="budget-item">${userText}</span>
                <span class="budget-cost">$${userCostSave}</span>
                <div class="budget-item-controls">
                    <button class="budget-item-toggle">
                    <span class="button-label">Check</span>
                    </button>
                    <button class="budget-item-delete">
                    <span class="button-label">Delete</span>
                    </button>
                </div>
            </li>`
            );
        });
};

function editList() {
    $('.budget-list').on('click', '.budget-item-delete', function(event) {
        $(this).closest('li').remove();
    });
    $('.budget-list').on('click', '.budget-item-toggle', function(event) {
        $(this).closest('li').find('.budget-item').toggleClass('budget-item__checked');
    });
};

function newIncome() {
    $('#clear-entry').click(function(event) {
        event.preventDefault();
        $('#sixty').html('');
        $('#twenty').html('');
        $('#twentytwo').html('');
    }
)}

function loadCalc() {
    percentNeces();
    percentWants();
    percentSave();
    addToNeces();
    addToSave();
    addToWants();
    editList();
    newIncome();
    console.log("calc is working")
}

$(loadCalc);