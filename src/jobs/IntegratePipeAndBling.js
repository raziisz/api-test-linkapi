import { BlingProvider } from '../providers/implementions/BlingProvider';

import Opportunity from '../database/schemas/OpportunitySchema';
import { RemoveCaracteresEspecial } from '../utils/HelpersFunctions';

const bling = new BlingProvider();

const verifyExistsOpportunity = async (opportunities = []) => {
  let newData = [];
  for (const op of opportunities) {
    let result = await Opportunity.findOne({id_op: op.id_op});

    if (!result) {
      newData.push(op);
    }
  }

  return newData;
}

const createOrderForBling = async (opportunities) => {
  opportunities.forEach(async op => {
    let newTitle = RemoveCaracteresEspecial(op.title);
    let codigo = ` PROD-${Date.now()}`;
    
    console.log(newTitle);
    let itens = [];
    
    let item = {};
    item.codigo = codigo;
    item.descricao = newTitle;
    item.vlr_unit = op.value;
    item.un = 'un';
    item.qtd = 1;
    
    itens.push({ item });
    
    let pedido = {
      cliente: {
        nome: op.org_name,
      },
      itens
    }
    
    try {
      const result = await bling.storeOrder(pedido);
      console.log('Resultado', result);
    } catch (error) {
      throw error
    }

  });
}

const createOpportunities = async (opportunities) => {
  opportunities.forEach(async op => {
    const result = await Opportunity.create(op);
  });
}

export default async function (data = []) {
  let mapOpportunities = [];
  try {
    if (data.length > 0) {
      mapOpportunities = data.map(x => {

        return { 
          id_op: x.id,
          title: x.title,
          value: x.value,
          stage_id: x.stage_id,
          currency: x.currency,
          add_time: x.add_time,
          update_time: x.update_time,
          active: x.active,
          deleted: x.deleted,
          status: x.status,
          close_time: x.close_time,
          won_time: x.won_time,
          first_won_time: x.first_won_time,
          person_name: x.person_name,
          org_name: x.org_name,
          owner_name: x.owner_name,
          cc_email: x.cc_email
        }
      }); 

      let newOpportunities = await verifyExistsOpportunity(mapOpportunities);
      

      if (newOpportunities.length > 0) {
        await createOpportunities(newOpportunities);
        await createOrderForBling(newOpportunities);

      }
    }

  } catch (error) {

    console.log('error', error);
    throw error;

  }
}